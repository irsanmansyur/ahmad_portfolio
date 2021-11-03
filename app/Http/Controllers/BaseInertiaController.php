<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use App\Models\Sosmed;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BaseInertiaController extends Controller
{
  public function __construct()
  {
    $setting = Setting::whereUserId(1)->first();
    if (!$setting)
      $setting = new Setting();
    $sosmeds = Sosmed::get();
    Inertia::share('sosmeds', $sosmeds);
    Inertia::share('setting', $setting);
  }
}
