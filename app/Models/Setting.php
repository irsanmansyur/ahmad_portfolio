<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
  use HasFactory;
  protected $fillable = ['about_app', "story_app", "name_app", "logo_app", "user_id"];
  protected $appends = ['url_logo'];
  public function getUrlLogoAttribute()
  {
    return "/image/setting/" . $this->logo_app;
  }
}
