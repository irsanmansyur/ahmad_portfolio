<?php

namespace App\Http\Controllers\Cart;

use App\Http\Controllers\BaseInertiaController;
use App\Http\Controllers\Controller;
use App\Models\Keranjang;
use Illuminate\Http\Request;

class CartController extends BaseInertiaController
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    //
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
    $attr =  $request->validate([
      "product_id" => "required|exists:products,id",
      "user_id" => "required|exists:users,id",
    ]);
    $keranjang = Keranjang::create($attr);
    return $keranjang;
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Keranjang  $keranjang
   * @return \Illuminate\Http\Response
   */
  public function show(Keranjang $keranjang)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Keranjang  $keranjang
   * @return \Illuminate\Http\Response
   */
  public function edit(Keranjang $keranjang)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\Keranjang  $keranjang
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Keranjang $keranjang)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Keranjang  $keranjang
   * @return \Illuminate\Http\Response
   */
  public function destroy(Keranjang $cart)
  {
    $cart->delete();
    return redirect(route("cart"));
  }
}
