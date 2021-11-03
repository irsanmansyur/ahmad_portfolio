<?php

namespace App\Repositories;

use App\Models\Product;

class ProductRepositories
{
  public function store(array $data): Product
  {

    $product =   Product::create([
      'name' => data_get($data, "name"),
      'description' => data_get($data, "description"),
      'harga' => data_get($data, "harga"),
    ]);
    $product->categories()->attach(data_get($data, "categories", []));
    foreach (data_get($data, 'image', []) as $image) {
      $imageName = time() . '.' .  $image->getClientOriginalName();
      $image->move(public_path('image/product'), $imageName);
      $data["images"][] =  ["path" => $imageName, "product_id" => $product->id];
    }
    $images = data_get($data, "images", []);
    if (count($images) > 0) {
      $product->images()->insert($data["images"]);
    }
    return $product;
  }
  public function update(Product $product, array $data)
  {

    $product->update([
      'name' => data_get($data, "name"),
      'description' => data_get($data, "description"),
      'harga' => data_get($data, "harga"),
    ]);
    $product->categories()->sync(data_get($data, "categories", []));
    foreach (data_get($data, 'image', []) as $image) {
      $imageName = time() . '.' .  $image->getClientOriginalName();
      $image->move(public_path('image/product'), $imageName);
      $data["images"][] =  ["path" => $imageName, "product_id" => $product->id];
    }
    $images = data_get($data, "images", []);
    if (count($images) > 0) {
      $this->deleteImages($product);
      $product->images()->insert($data["images"]);
    }
    return $product;
  }
  public function deleteImages(Product $product)
  {
    foreach ($product->images as $image) {
      if (file_exists("image/product/" . $image->path)) {
        unlink("image/product/" . $image->path);
      }
      $image->delete();
    }
  }
  public function destroy(Product $product)
  {
    $this->deleteImages($product);
    $product->delete();
  }
}
