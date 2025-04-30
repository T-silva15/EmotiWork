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
			IsQuestionnaireSubmitted = HttpContext.Session.GetString("QuestionnaireSubmitted") == "true";
		}

		public IActionResult OnPost()
		{
			HttpContext.Session.SetString("QuestionnaireSubmitted", "true");
			IsQuestionnaireSubmitted = true;

			return RedirectToPage("/Home");
		}
	}
}
