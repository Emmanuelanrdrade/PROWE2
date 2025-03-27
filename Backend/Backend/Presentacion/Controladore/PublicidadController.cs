using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Presentacion.Controladore
{
    public class PublicidadController : Controller
    {
        // GET: PublicidadController
        public ActionResult Index()
        {
            return View();
        }

        // GET: PublicidadController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: PublicidadController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PublicidadController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PublicidadController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: PublicidadController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PublicidadController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: PublicidadController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
