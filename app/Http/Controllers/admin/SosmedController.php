<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Sosmed;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SosmedController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $sosmeds = Sosmed::get();
    return Inertia::render("Admin/Sosmed", compact("sosmeds"));
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    return Inertia::render("Admin/Sosmed/Create", []);
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
      "url" => "required|url",
      "value" => "required|min:3",
      "name" => "required",
      "icon" => "required|file|image|mimes:png,jpg,svg,svg+xml"
    ]);
    $image =  $data['icon'];
    $imageName = time() . '.' .  $image->getClientOriginalName();
    $image->move(public_path('image/sosmed'), $imageName);
    $data['icon'] = $imageName;
    $data['user_id'] = auth()->id();
    $sosmed = Sosmed::create($data);
    return redirect()->route("admin.sosmed.index")->with("message", "Success Created");
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Sosmed  $sosmed
   * @return \Illuminate\Http\Response
   */
  public function show(Sosmed $sosmed)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Sosmed  $sosmed
   * @return \Illuminate\Http\Response
   */
  public function edit(Sosmed $sosmed)
  {
    return Inertia::render("Admin/Sosmed/Edit", ['sosmed' => $sosmed]);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\Sosmed  $sosmed
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Sosmed $sosmed)
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
      $image->move(public_path('image/sosmed'), $imageName);
      $data['icon'] = $imageName;
    }
    $data['user_id'] = auth()->id();

    if (file_exists("image/sosmed/" . $sosmed->icon)) {
      unlink("image/sosmed/" . $sosmed->icon);
    }
    $sosmed->update($data);
    return redirect()->route("admin.sosmed.index")->with("message", "Success Updated");
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Sosmed  $sosmed
   * @return \Illuminate\Http\Response
   */
  public function destroy(Sosmed $sosmed)
  {
    $sosmed->delete();
    return redirect()->route("admin.sosmed.index")->with("message", "Success Deleted");
  }
}
