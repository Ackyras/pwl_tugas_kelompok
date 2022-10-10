<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $cruds = [
            'create',
            'read',
            'update',
            'delete',
        ];

        $allPermissions = [
            [
                'users' =>  $cruds,
            ],
            [
                'articles' =>  $cruds,
            ],
        ];
        $dev = Role::where('name', 'dev')->first();
        $admin = Role::where('name', 'admin')->first();
        $writer = Role::where('name', 'writer')->first();
        $user = Role::where('name', 'user')->first();
        foreach ($allPermissions as $permissions) {
            foreach ($permissions as $key => $cruds) {
                $parentPermission = Permission::create(
                    [
                        'name'  =>  $key,
                    ]
                );
                $parentPermission->assignRole($dev);
                foreach ($cruds as $crud) {
                    $childPermissions = Permission::create(
                        [
                            'name'  =>  $key . '.' . $crud,
                        ]
                    );
                    $childPermissions->assignRole($dev);
                }
            }
        }
    }
}
