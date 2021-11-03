<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $categories = Category::latest()->get();
    return Inertia::render("Admin/Category", compact("categories"));
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {

    return Inertia::render("Admin/Category/Create", []);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $attr =  $request->validate([
      "name" => "required|unique:categories,name"
    ]);
    $categories = Category::create($attr);
    return redirect()->route("admin.category.index");
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
  public function edit(Category $category)
  {
    return Inertia::render("Admin/Category/Edit", compact("category"));
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Category  $category)
  {
    $uniq = "";
    if ($category->name != $request->name)
      $uniq = "|unique:categories,name";
    $attr =  $request->validate([
      "name" => "required$uniq"
    ]);
    $category->update($attr);
    return redirect()->route("admin.category.index")->with("message", "Category Berhasil Di Ubah");
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(Category $category)
  {
    $category->delete();
    return redirect()->route("admin.category.index");
  }
}
