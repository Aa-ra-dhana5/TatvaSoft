using LoginPage.Models;
using Microsoft.AspNetCore.Mvc;

namespace LoginPage.Controllers
{
    public class AccountController : Controller
    {
        // GET: /Account/Login
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Login(LoginModel model)
        {
            if (ModelState.IsValid)
            {
                if (model.Username == "admin" && model.Password == "admin123")
                {
                    TempData["Message"] = "Login successful!";
                    return RedirectToAction("Dashboard");
                }
                else
                {
                    ViewBag.Error = "Invalid username or password";
                }
            }

            return View(model);
        }

        public IActionResult Dashboard()
        {
            return View();
        }
    }
}
