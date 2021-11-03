<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $setting = Setting::whereUserId(auth()->id())->first() ?? new Setting();
    return Inertia::render("Admin/Setting", compact("setting"));
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    return Inertia::render("Admin/Setting/Create", []);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $data = $request->validate([
      "about_app" => "required|min:10",
      "story_app" => "required|min:10",
      "name_app" => "required",
      "logo_app" => "nullable|file|image|mimes:png,jpg,svg,svg+xml"
    ]);
    $setting = Setting::whereUserId(auth()->id())->first();
    if ($setting && file_exists("image/setting/" . $setting->logo_app)) {
      unlink("image/setting/" . $setting->logo_app);
    }
    if (isset($data['logo_app'])) {
      $image =  $data['logo_app'];
      $imageName = time() . '.' .  $image->getClientOriginalName();
      $image->move(public_path('image/setting'), $imageName);
      $data['logo_app'] = $imageName;
    }
    if ($setting)
      $setting->update($data);
    else {
      $data['user_id'] = auth()->id();
      $setting = Setting::create($data);
    }
    return redirect()->route("admin.setting.index")->with("message", "Success Update");
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Setting  $setting
   * @return \Illuminate\Http\Response
   */
  public function show(Setting $setting)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Setting  $setting
   * @return \Illuminate\Http\Response
   */
  public function edit(Setting $setting)
  {
    return Inertia::render("Admin/Setting/Edit", ['setting' => $setting]);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\Setting  $setting
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Setting $setting)
  {
    $data = $request->validate([
      "url" => "required|url",
      "value" => "required|min:3",
      "name" => "required",
      "icon" => "nullable|file|image|mimes:png,jpg,svg,svg+xml"
    ]);
    if (isset($data['icon'])) {
      $image =  $data['icon'];
      $imageName = time() . '.' .  $image->getClientOriginalName();
      $image->move(public_path('image/setting'), $imageName);
      $data['icon'] = $imageName;
    }
    $data['user_id'] = auth()->id();

    if (file_exists("image/setting/" . $setting->icon)) {
      unlink("image/setting/" . $setting->icon);
    }
    $setting->update($data);
    return redirect()->route("admin.setting.index")->with("message", "Success Updated");
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Setting  $setting
   * @return \Illuminate\Http\Response
   */
  public function destroy(Setting $setting)
  {
    $setting->delete();
    return redirect()->route("admin.setting.index")->with("message", "Success Deleted");
  }
}
