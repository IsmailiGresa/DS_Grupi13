<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionTableSeeder extends Seeder
{
    /**
     * Policy classes that the seeder should pick up
     * permissions to seed from.
     */
    protected $policies = [
        \App\Policies\PromoPolicy::class
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->policies as $policy) {

            if (empty($policy::PERMISSIONS)) {
                continue;
            }

            foreach ($policy::PERMISSIONS as $permission) {
                // dd($permission);
                Permission::updateOrCreate(['name' => $permission]);
            }

            // Grant all Nova Permissions to Super-Admin Role
            $role = Role::where('name', 'admin')->first();

            if ($role) {
                $role->permissions;
                $role->permissions()->attach(Permission::get());
            }
        }
    }
}
