<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class PermissionSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    app()[PermissionRegistrar::class]->forgetCachedPermissions();
    // create permissions
    Permission::create(['name' => 'permission']);
    // create roles and assign existing permissions
    $roleSAdmin = Role::create(['name' => 'Super Admin']);
    Role::create(['name' => 'Admin']);
    $roleSAdmin->givePermissionTo('permission');
  }
}
