<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
   */
  public function toArray($request)
  {
    return array_merge(parent::toArray($request), [
      "urls" => array_map(function ($image) {
        return $image->url;
      }, $this->images->all()),
      "categories" => $this->categories
    ]);
  }
}
