<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use App\Repositories\ProductRepositories;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $products = Product::get();
    return Inertia::render("Admin/Product", compact("products"));
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    return Inertia::render("Admin/Product/Create", [
      "categories" => Category::get()
    ]);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request, ProductRepositories $repoProduct)
  {
    $attr =   $request->validate([
      "name" => "required|min:5",
      "description" => "required",
      "harga" => "required|numeric",
      'image' => 'array|nullable',
      'image.*' => 'image|mimes:jpeg,png,jpg,gif,svg',
      "categories" => "required|array"
    ]);

    $product = $repoProduct->store($attr);

    return redirect(route("admin.product.index"))->with("message", "Produk berhasil di tambahkan");
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Product  $product
   * @return \Illuminate\Http\Response
   */
  public function show(Product $product)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Product  $product
   * @return \Illuminate\Http\Response
   */
  public function edit(Product $product)
  {
    return Inertia::render("Admin/Product/Edit", [
      "product" => new ProductResource($product),
      "categories" => Category::get()
    ]);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\Product  $product
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Product $product, ProductRepositories $repoProduct)
  {
    $attr =   $request->validate([
      "name" => "required|min:5",
      "description" => "required",
      "harga" => "required|numeric",
      'image' => 'array|nullable',
      'image.*' => 'image|mimes:jpeg,png,jpg,gif,svg',
      "categories" => "required|array"
    ]);
    $product = $repoProduct->update($product, $attr);
    return redirect(route("admin.product.index"))->with("message", "Produk berhasil di update");
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Product  $product
   * @return \Illuminate\Http\Response
   */
  public function destroy(Product $product, ProductRepositories $repoProduct)
  {
    $repoProduct->destroy($product);
    return redirect(route("admin.product.index"));
  }
}
