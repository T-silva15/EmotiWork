using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Http;

namespace EmotiWork.Pages
{
	public class QuestionnaireModel : PageModel
	{
		public bool IsQuestionnaireSubmitted { get; set; }

		[BindProperty]
		public string[] Answers { get; set; } = new string[5];

		public void OnGet()
		{
			// Add debug line to check session state
			string submittedValue = HttpContext.Session.GetString("QuestionnaireSubmitted");
			IsQuestionnaireSubmitted = submittedValue == "true";
		}

		public IActionResult OnPost()
		{
			// Check if all answers are provided
			if (Answers == null || Answers.Any(a => string.IsNullOrEmpty(a)))
			{
				ModelState.AddModelError(string.Empty, "Por favor, responda a todas as questões.");
				return Page();
			}

			// Debug output to confirm data is being received
			Console.WriteLine("Received answers:");
			for (int i = 0; i < Answers.Length; i++)
			{
				Console.WriteLine($"Answer {i}: {Answers[i]}");
			}

			// Set session state after successful submission
			HttpContext.Session.SetString("QuestionnaireSubmitted", "true");
			IsQuestionnaireSubmitted = true;

			return RedirectToPage("/Home");
		}
	}
}
