# 💼 EmotiWork - Accessible Workplace Well-being Monitoring Platform

[![ASP.NET Core](https://img.shields.io/badge/ASP.NET%20Core-9.0-purple.svg)](https://dotnet.microsoft.com/)
[![C#](https://img.shields.io/badge/C%23-12.0-blue.svg)](https://docs.microsoft.com/en-us/dotnet/csharp/)
[![Entity Framework](https://img.shields.io/badge/Entity%20Framework-9.0-green.svg)](https://docs.microsoft.com/en-us/ef/)
[![Chart.js](https://img.shields.io/badge/Chart.js-Visualization-ff6384.svg)](https://www.chartjs.org/)
[![WCAG](https://img.shields.io/badge/WCAG-2.1%20AA-blue.svg)](https://www.w3.org/WAI/WCAG21/quickref/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **Academic Project** | Current Semester | **Final Grade: TBD** 🎯

An **accessibility-first** workplace well-being monitoring platform designed to ensure inclusive employee emotional health tracking, productivity metrics, and team dynamics through universally accessible questionnaires and data visualization.

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [♿ Accessibility Features](#-accessibility-features)
- [✨ Features](#-features)
- [🏗️ Project Structure](#️-project-structure)
- [🚀 Getting Started](#-getting-started)
- [💻 Usage](#-usage)
- [🛠️ Technologies](#️-technologies)
- [📊 Analytics & Insights](#-analytics--insights)
- [🔮 Future Enhancements](#-future-enhancements)
- [📄 License](#-license)

## ♿ Accessibility Features

**EmotiWork prioritizes universal accessibility as its core mission**, ensuring that workplace well-being monitoring is inclusive and usable by all employees, regardless of their abilities or assistive technology needs.

### 🌐 WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 contrast ratio for all text and interactive elements
- **Color Independence**: Information never conveyed through color alone
- **Focus Indicators**: Clear, visible focus states for all interactive elements
- **Text Sizing**: Support for up to 200% zoom without horizontal scrolling

### ⌨️ Keyboard Navigation
- **Tab Order**: Logical, intuitive navigation through all interface elements
- **Keyboard Shortcuts**: Quick access to main functions without mouse interaction
- **Skip Links**: Direct navigation to main content areas
- **Escape Routes**: Easy exit from modal dialogs and complex interactions

### 🔍 Screen Reader Support
- **Semantic HTML**: Proper use of headings, landmarks, and ARIA labels
- **Alt Text**: Descriptive alternative text for all meaningful images and charts
- **Live Regions**: Dynamic content updates announced to assistive technologies
- **Form Labels**: Clear, descriptive labels for all input fields

### 🎨 Visual Accessibility
- **High Contrast Mode**: Alternative color schemes for better visibility
- **Reduced Motion**: Respect for users' motion sensitivity preferences
- **Scalable Icons**: Vector-based icons that scale without quality loss
- **Clear Typography**: High-readability fonts with adequate spacing

### 🗣️ Inclusive Interaction Design
- **Multiple Input Methods**: Support for voice, switch, and alternative input devices
- **Error Prevention**: Clear validation and helpful error messages
- **Timeout Extensions**: Adjustable or extendable session timeouts
- **Content Simplification**: Plain language and clear, concise instructions

### 📱 Mobile Accessibility
- **Touch Targets**: Minimum 44px touch target size for mobile interactions
- **Gesture Alternatives**: Alternative methods for gesture-based actions
- **Orientation Support**: Functional in both portrait and landscape modes
- **Zoom Compatibility**: Full functionality maintained at high zoom levels

## 🎯 Overview

EmotiWork is an **accessibility-first** workplace well-being monitoring solution that prioritizes inclusive design to ensure all employees, regardless of their abilities, can participate in emotional health tracking and team analytics. Built with modern web technologies and strict adherence to WCAG 2.1 AA guidelines, the platform combines accessible daily emotional check-ins, comprehensive analytics, and administrative tools to create healthier, more inclusive work environments.

### Key Highlights
- **🌐 Universal Accessibility**: WCAG 2.1 AA compliant design ensuring usability for all employees
- **🔍 Screen Reader Optimized**: Full compatibility with assistive technologies
- **⌨️ Keyboard Navigation**: Complete functionality without mouse interaction
- **🎨 High Contrast Design**: Accessible color schemes and visual indicators
- **🗣️ Multi-modal Interaction**: Support for various input methods and assistive devices
- **📱 Responsive Accessibility**: Consistent accessibility across all device sizes
- **Emotional Intelligence**: Daily mood tracking with accessible questionnaires
- **Real-time Analytics**: Inclusive dashboards with Chart.js visualizations
- **Team Management**: Multi-user support with role-based access control
- **Data Privacy**: GDPR-compliant data protection and anonymous reporting

## ✨ Features

### 😊 Employee Well-being Tracking
- **Accessible Daily Questionnaires**: WCAG-compliant emotional check-ins with screen reader support
- **Universal Mood Selection**: High-contrast, keyboard-navigable emoji-based mood tracking
- **Inclusive Progress Monitoring**: Screen reader compatible statistics and trend analysis
- **Accessible Notification System**: Multi-modal reminders with visual and text alternatives

### 📊 Analytics & Insights
- **Accessible Personal Dashboard**: Screen reader optimized productivity and well-being metrics
- **Inclusive Team Analytics**: Alternative text descriptions for all charts and visual data
- **Universal Statistical Reports**: Data available in multiple formats (visual, tabular, audio descriptions)
- **Accessible Time Tracking**: Keyboard-navigable check-in/check-out system with clear feedback

### 👥 Team Management
- **Inclusive Team Overview**: Accessible real-time team member status indicators
- **Universal Department Management**: Screen reader compatible user organization tools
- **Accessible Collaboration Metrics**: Alternative formats for team interaction data
- **Inclusive Member Profiles**: Keyboard-navigable detailed performance insights

### 🛡️ Administrative Features
- **Accessible Backoffice Dashboard**: Fully keyboard-navigable administrative control panel
- **Inclusive User Management**: Screen reader compatible user lifecycle and role assignment
- **Universal Anonymous Reporting**: Accessible secure whistleblowing and feedback system
- **Accessible Data Protection**: GDPR-compliant privacy controls with clear, simple language

### 🔔 Communication & Alerts
- **Accessible Notification Center**: Screen reader optimized centralized communication hub
- **Inclusive Announcement System**: Multi-format company-wide messaging capabilities
- **Universal Alert Management**: Customizable, accessible reminder and deadline notifications
- **Accessible Vacation Planning**: Keyboard-navigable integrated leave management system

## 🏗️ Project Structure

```
EmotiWork/
├── Pages/                      # Razor Pages for UI
│   ├── Home.cshtml            # Main dashboard with mood selection
│   ├── Dashboard.cshtml       # Personal productivity dashboard
│   ├── Questionnaire.cshtml   # Daily emotional questionnaires
│   ├── Statistics.cshtml      # Personal analytics and insights
│   ├── Team.cshtml           # Team overview and management
│   ├── Notifications.cshtml   # Notification center
│   ├── Profile.cshtml        # User profile management
│   ├── Settings.cshtml       # User preferences and configuration
│   ├── Reports.cshtml        # Anonymous reporting system
│   ├── Vacation.cshtml       # Leave planning interface
│   ├── Login.cshtml          # Authentication interface
│   ├── Privacy.cshtml        # Data protection information
│   └── Backoffice/           # Administrative interfaces
│       ├── AdminStatistics.cshtml    # System-wide analytics
│       ├── Users.cshtml              # User management
│       ├── Teams.cshtml              # Team administration
│       ├── Departments.cshtml        # Department management
│       ├── Questionnaires.cshtml     # Questionnaire configuration
│       ├── Reports.cshtml            # Report management
│       └── SendAnnouncement.cshtml   # Communication tools
├── wwwroot/                   # Static assets
│   ├── css/                  # Styling and themes
│   ├── js/                   # JavaScript functionality
│   └── img/                  # Images and icons
├── Program.cs                 # Application entry point
├── appsettings.json          # Configuration settings
└── EmotiWork.csproj          # Project dependencies
```

## 🚀 Getting Started

### Prerequisites
- [.NET 9.0 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- [Visual Studio 2022](https://visualstudio.microsoft.com/) or [VS Code](https://code.visualstudio.com/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/) or [SQL Server LocalDB](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/T-silva15/EmotiWork.git
   cd EmotiWork
   ```

2. **Restore dependencies**
   ```bash
   dotnet restore
   ```

3. **Configure database connection**
   Update the connection string in `appsettings.json`:
   ```json
   {
     "ConnectionStrings": {
       "EmotiWorkContext": "Server=(localdb)\\mssqllocaldb;Database=EmotiWorkDB;Trusted_Connection=true;MultipleActiveResultSets=true"
     }
   }
   ```

4. **Apply database migrations** (if applicable)
   ```bash
   dotnet ef database update
   ```

5. **Run the application**
   ```bash
   dotnet run
   ```

6. **Access the application**
   Navigate to `https://localhost:5001` or `http://localhost:5000`

## 💻 Usage

### 🏠 Landing & Authentication
- **Welcome Page**: Introduction to EmotiWork platform and features
- **Login System**: Secure authentication for employee access
- **About Us**: Company information and contact details

### 😊 Daily Well-being Check-ins
1. **Mood Selection**: Choose from emoji-based mood indicators on home page
2. **Questionnaire**: Complete daily 5-question emotional assessment
3. **Progress Tracking**: View personal statistics and mood trends over time

### 📊 Personal Dashboard
- **Productivity Gauge**: Real-time work progress tracking
- **Time Management**: Check-in/check-out functionality for lunch breaks
- **Quick Actions**: Access to team, notifications, and vacation planning

### 👥 Team Management
- **Team Overview**: Monitor team well-being metrics and trends
- **Member Status**: Real-time view of team member emotional states
- **Collaboration Analytics**: Track team interaction and productivity

### 🛡️ Administrative Tools
- **Backoffice Access**: Administrative dashboard for system management
- **User Administration**: Manage user accounts, roles, and permissions
- **Analytics**: System-wide statistics and reporting capabilities

## 🛠️ Technologies

### Backend Framework
- **ASP.NET Core 9.0** - Modern web application framework
- **Razor Pages** - Server-side page rendering with C#
- **Entity Framework Core 9.0** - Object-relational mapping (ORM)
- **C# 12.0** - Primary programming language with latest features

### Frontend Technologies
- **HTML5 & CSS3** - Semantic markup and accessible styling with WCAG 2.1 AA compliance
- **JavaScript (ES6+)** - Accessible client-side interactivity with ARIA support
- **Chart.js** - Accessible data visualization with alternative text and keyboard navigation
- **Font Awesome 6.4.2** - Accessible icon library with proper ARIA labels
- **WCAG Guidelines** - Strict adherence to Web Content Accessibility Guidelines 2.1 AA
- **ARIA Standards** - Comprehensive use of ARIA attributes for assistive technology support

### Data & Analytics
- **SQL Server** - Relational database management
- **Chart.js Visualizations** - Interactive charts and graphs
- **Session Management** - Secure user state management
- **JSON Configuration** - Flexible application settings

### Development Tools
- **Visual Studio 2022** - Primary development environment
- **Git** - Version control and collaboration
- **NuGet Package Manager** - Dependency management

### Key Dependencies
```xml
<PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="9.0.0" />
<PackageReference Include="Microsoft.EntityFrameworkCore.Tools" Version="9.0.0" />
<PackageReference Include="Microsoft.VisualStudio.Web.CodeGeneration.Design" Version="9.0.0" />
```

## 📊 Analytics & Insights

### Personal Analytics
- **Mood Trends**: Weekly and monthly emotional pattern analysis
- **Productivity Metrics**: Work efficiency and output measurements
- **Well-being Scores**: Comprehensive health and satisfaction indices
- **Time Analysis**: Work-life balance and schedule optimization

### Team Analytics
- **Team Health**: Aggregate well-being metrics and trend analysis
- **Collaboration Insights**: Inter-team communication and cooperation metrics
- **Productivity Comparisons**: Department and team performance benchmarking
- **Alert Systems**: Proactive identification of well-being concerns

### Administrative Reporting
- **System-wide Statistics**: Platform usage and engagement metrics
- **Department Analysis**: Cross-departmental performance and well-being
- **Compliance Reporting**: GDPR and privacy regulation adherence
- **Custom Dashboards**: Configurable analytics for management needs

## 🔮 Future Enhancements

- [ ] **Enhanced Accessibility Features**: Voice-controlled navigation and AI-powered accessibility assistance
- [ ] **Screen Reader Optimization**: Advanced NVDA, JAWS, and VoiceOver compatibility improvements
- [ ] **Multi-language Accessibility**: Internationalization with accessibility support for global organizations
- [ ] **Mobile Application**: Native iOS/Android apps with built-in accessibility features
- [ ] **AI-Powered Insights**: Machine learning recommendations with accessible presentation
- [ ] **Integration APIs**: Connect with assistive technology and accessibility tools
- [ ] **Advanced Analytics**: Predictive modeling with accessible data representation
- [ ] **Real-time Notifications**: Push notifications compatible with screen readers and assistive devices
- [ ] **Wellness Programs**: Integrated accessible health and wellness activity tracking
- [ ] **Video Conferencing**: Built-in accessible communication tools for remote teams
- [ ] **Calendar Integration**: Accessible sync with popular calendar applications
- [ ] **Export Capabilities**: Accessible data export in multiple formats (CSV, PDF, audio descriptions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**EmotiWork** - Transforming workplace well-being through accessible, inclusive emotional analytics

Made with ❤️ and ♿ using ASP.NET Core 9.0 | Academic Excellence: TBD 🎯

*"Building a more inclusive workplace, one accessible feature at a time"*

</div>
