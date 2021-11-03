<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
  use HasFactory;
  protected $fillable = ["name", "description", "harga", 'type'];
  public function keranjangs()
  {
    return $this->hasMany(Keranjang::class);
  }
  public function images()
  {
    return $this->hasMany(Images::class);
  }
  public function categories()
  {
    return $this->belongsToMany(Category::class);
  }
  public function cover()
  {
    return $this->hasOne(Images::class)->orderBy("type");
  }
}
