<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Images extends Model
{
  protected $table = "images_product";
  use HasFactory;
  protected $appends = array('url');

  public function getUrlAttribute()
  {
    return "/image/product/" . $this->path;
  }
}
