<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sosmed extends Model
{
  use HasFactory;
  protected $fillable = ["url", "value", "name", "icon", "user_id"];
  protected $appends = array('url_icon');

  public function getUrlIconAttribute()
  {
    return "/image/sosmed/" . $this->icon;
  }
}
