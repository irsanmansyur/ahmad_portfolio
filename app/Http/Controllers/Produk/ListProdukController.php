<?php

namespace App\Http\Controllers\Produk;

use App\Http\Controllers\BaseInertiaController;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ListProdukController extends BaseInertiaController
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {

    return Inertia::render("Produk/List", [
      "categories" => Category::withCount("products")->get(),
      "products" => ProductResource::collection(Product::where(function ($q)  use ($request) {
        $search = $request->search;
        $category = $request->category;
        if ($category)
          $q->whereHas("categories", function ($qCat)  use ($category) {
            $qCat->where("name", "LIKE", "%" . $category . "%");
          });
        if ($search) {
          $q->where(function ($query) use ($search) {
            $query->where("name", "LIKE", "%" . $search . "%")
              ->orWhere("name", "LIKE", "%" . $search . "%");
          });
        }
      })->with("cover")->paginate(12))
    ]);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
  }
}
