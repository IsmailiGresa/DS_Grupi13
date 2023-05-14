<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Ability;
use App\Models\Car;
use App\Models\Charity;
use App\Models\Donation;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(50)->create();
        Car::factory(10)->create();
        $role = Role::create([
            'name' => 'admin',
            'description' => 'some description',
        ]);

        $ability = Ability::create([
            'action' => 'create-driver',
            'model_name' => User::class,
        ]);
        Charity::create([
            'name'=> 'Komuniteti Mbështetës i Kancerit në Kosovë'
        ]);
        Charity::create([
            'name' => 'Kryqi i Kuq i Kosovës'
        ]);
        Charity::create([
            'name' => 'Shoqata e të Verbërve të Kosovës'
        ]);
        Charity::create([
            'name' => 'YMCA Kosovo'
        ]);
        Charity::create([
            'name' => 'Save the Children Kosovo'
        ]);
        Charity::create([
            'name' => 'UNICEF Kosovo'
        ]);
        Charity::create([
            'name' => 'Fondacioni për të Drejtat e Kafshëve'
        ]);
        Charity::create([
            'name' => 'Qendra për Promovimin e Drejtave të Grave'
        ]);
        Charity::create([
            'name' => 'HANDIKOS'
        ]);

        $role->abilities()->attach($ability);

        Donation::factory(10)->create();
    }
}
