<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\ProductController;
use App\Http\Controllers\admin\SettingController;
use App\Http\Controllers\Admin\SosmedController;
use App\Http\Controllers\Cart\CartController;
use App\Http\Controllers\Cart\ListCartController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Order\ListOrderController;
use App\Http\Controllers\Portfolio\ListPortfolioController;
use App\Http\Controllers\PricingController;
use App\Http\Controllers\Produk\DetailProdukCOntroller;
use App\Http\Controllers\Produk\ListProdukController;
use App\Http\Controllers\Produk\ProdukController;
use App\Http\Controllers\User\AccountController;
use App\Http\Controllers\User\DownloadController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, "index"])->name("home");

Route::middleware("auth", "role:Super Admin")->prefix("admin")->group(function () {
  Route::resource("category", CategoryController::class, ['as' => "admin"]);
  Route::resource("product", ProductController::class, ['as' => "admin"]);
  Route::resource("sosmed", SosmedController::class, ['as' => "admin"]);
  Route::resource("setting", SettingController::class, ['as' => "admin"]);
});

Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/produks', [ListProdukController::class, "index"])->name('store');
Route::get('/produk-view/{product}', [DetailProdukCOntroller::class, "index"])->name('store.view');
Route::get('/produks/{category:name}', [ProdukController::class, "category"])->name('store.category');
Route::get('/about', [AboutController::class, "index"])->name('about');
Route::get('/pricing', [PricingController::class, "index"])->name('pricing');
Route::get('/portfolio', [ListPortfolioController::class, "index"])->name('portfolio');



Route::middleware("auth")->group(function () {
  Route::get("/my-account", [AccountController::class, "index"])->name("user.account");
  Route::get("/downloads", [DownloadController::class, "index"])->name("user.downloads");
  Route::get("/orders", [ListOrderController::class, "index"])->name("user.orders");

  // cart
  Route::get('/cart', [ListCartController::class, "index"])->name('cart');
  Route::post("/add-to-cart", [CartController::class, "store"])->name("cart.add");
  Route::delete("/delete-cart/{cart}", [CartController::class, "destroy"])->name("cart.destroy");
});

require __DIR__ . '/auth.php';
require __DIR__ . '/paypal.php';
Route::get('/test', function () {
  return inertia("Test", []);
});
