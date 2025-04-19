document.addEventListener('DOMContentLoaded', function() {
    // Calendar initialization
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const startDateCalendar = document.getElementById('startDateCalendar');
    const endDateCalendar = document.getElementById('endDateCalendar');
    
    let selectedStartDate = null;
    let selectedEndDate = null;
    
    // Helper functions
    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }
    
    function getFirstDayOfMonth(year, month) {
        return new Date(year, month, 1).getDay();
    }
    
    function formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    
    // Generate month names in Portuguese
    const monthNames = [
        'janeiro', 'fevereiro', 'março', 'abril', 
        'maio', 'junho', 'julho', 'agosto', 
        'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    
    // Calendar rendering function
    function renderCalendar(calendarElement, year, month, selectedDate) {
        const headerElement = calendarElement.querySelector('.month-year');
        const daysGridElement = calendarElement.querySelector('.days-grid');
        
        // Update header
        headerElement.textContent = `${monthNames[month]} de ${year}`;
        
        // Clear previous days
        daysGridElement.innerHTML = '';
        
        // Get number of days in the month and the first day of the month
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        
        // Get days from previous month
        const daysInPrevMonth = getDaysInMonth(year, month - 1);
        
        // Add days from previous month
        for (let i = firstDay - 1; i >= 0; i--) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('calendar-day', 'day-prev-month');
            dayElement.textContent = daysInPrevMonth - i;
            daysGridElement.appendChild(dayElement);
        }
        
        // Add days of current month
        const today = new Date();
        const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
        
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('calendar-day');
            dayElement.textContent = day;
            
            // Mark current day
            if (isCurrentMonth && day === today.getDate()) {
                dayElement.classList.add('day-today');
            }
            
            // Mark selected date
            if (selectedDate && 
                selectedDate.getFullYear() === year && 
                selectedDate.getMonth() === month && 
                selectedDate.getDate() === day) {
                dayElement.classList.add('day-selected');
            }
            
            // Add click event
            dayElement.addEventListener('click', function() {
                const date = new Date(year, month, day);
                
                if (calendarElement === startDateCalendar) {
                    selectedStartDate = date;
                    startDateInput.value = formatDate(date);
                    toggleCalendar(startDateCalendar, false);
                    
                    // If end date is before start date, reset end date
                    if (selectedEndDate && selectedEndDate < date) {
                        selectedEndDate = null;
                        endDateInput.value = '';
                    }
                } else {
                    selectedEndDate = date;
                    endDateInput.value = formatDate(date);
                    toggleCalendar(endDateCalendar, false);
                    
                    // If start date is after end date, set start date to match end date
                    if (selectedStartDate && selectedStartDate > date) {
                        selectedStartDate = null;
                        startDateInput.value = '';
                    }
                }
                
                // Re-render both calendars
                renderCalendar(startDateCalendar, selectedStartDate?.getFullYear() || new Date().getFullYear(), 
                               selectedStartDate?.getMonth() || new Date().getMonth(), selectedStartDate);
                renderCalendar(endDateCalendar, selectedEndDate?.getFullYear() || new Date().getFullYear(), 
                               selectedEndDate?.getMonth() || new Date().getMonth(), selectedEndDate);
            });
            
            daysGridElement.appendChild(dayElement);
        }
        
        // Add days from next month
        const totalCells = 42; // 6 rows of 7 days
        const remainingCells = totalCells - (firstDay + daysInMonth);
        
        for (let day = 1; day <= remainingCells; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('calendar-day', 'day-next-month');
            dayElement.textContent = day;
            daysGridElement.appendChild(dayElement);
        }
    }
    
    // Toggle calendar visibility
    function toggleCalendar(calendar, show) {
        if (show === undefined) {
            calendar.classList.toggle('active');
        } else if (show) {
            calendar.classList.add('active');
        } else {
            calendar.classList.remove('active');
        }
    }
    
    // Initial calendar rendering
    let currentDate = new Date();
    let startCalendarYear = currentDate.getFullYear();
    let startCalendarMonth = currentDate.getMonth();
    let endCalendarYear = currentDate.getFullYear();
    let endCalendarMonth = currentDate.getMonth() + 2; // Start with two months later
    
    // Adjust year if needed for end date calendar
    if (endCalendarMonth > 11) {
        endCalendarYear++;
        endCalendarMonth = endCalendarMonth % 12;
    }
    
    renderCalendar(startDateCalendar, startCalendarYear, startCalendarMonth, null);
    renderCalendar(endDateCalendar, endCalendarYear, endCalendarMonth, null);
    
    // Event listeners for date inputs
    startDateInput.addEventListener('click', function() {
        toggleCalendar(startDateCalendar, true);
        toggleCalendar(endDateCalendar, false);
    });
    
    endDateInput.addEventListener('click', function() {
        toggleCalendar(endDateCalendar, true);
        toggleCalendar(startDateCalendar, false);
    });
    
    // Event listeners for prev/next month navigation
    startDateCalendar.querySelectorAll('.month-nav').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            if (this.classList.contains('prev')) {
                startCalendarMonth--;
                if (startCalendarMonth < 0) {
                    startCalendarYear--;
                    startCalendarMonth = 11;
                }
            } else {
                startCalendarMonth++;
                if (startCalendarMonth > 11) {
                    startCalendarYear++;
                    startCalendarMonth = 0;
                }
            }
            renderCalendar(startDateCalendar, startCalendarYear, startCalendarMonth, selectedStartDate);
        });
    });
    
    endDateCalendar.querySelectorAll('.month-nav').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            if (this.classList.contains('prev')) {
                endCalendarMonth--;
                if (endCalendarMonth < 0) {
                    endCalendarYear--;
                    endCalendarMonth = 11;
                }
            } else {
                endCalendarMonth++;
                if (endCalendarMonth > 11) {
                    endCalendarYear++;
                    endCalendarMonth = 0;
                }
            }
            renderCalendar(endDateCalendar, endCalendarYear, endCalendarMonth, selectedEndDate);
        });
    });
    
    // Close calendars when clicking outside
    document.addEventListener('click', function(e) {
        if (!startDateCalendar.contains(e.target) && e.target !== startDateInput) {
            toggleCalendar(startDateCalendar, false);
        }
        
        if (!endDateCalendar.contains(e.target) && e.target !== endDateInput) {
            toggleCalendar(endDateCalendar, false);
        }
    });
    
    // Prevent clicks inside calendar from closing it
    [startDateCalendar, endDateCalendar].forEach(calendar => {
        calendar.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    
    // Submit button event handler
    document.querySelector('.submit-btn').addEventListener('click', function() {
        if (!selectedStartDate || !selectedEndDate) {
            alert('Por favor, selecione as datas de início e fim das férias.');
            return;
        }
        
        // Here you would handle form submission
        alert(`Férias marcadas de ${formatDate(selectedStartDate)} a ${formatDate(selectedEndDate)}`);
    });
});
