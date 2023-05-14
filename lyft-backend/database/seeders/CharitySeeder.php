<?php

namespace Database\Seeders;

use App\Models\Charity;
use Illuminate\Database\Seeder;

class CharitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Charity::create([
            'name' => 'Komuniteti Mbështetës i Kancerit në Kosovë',
        ]);
        Charity::create([
            'name' => 'Kryqi i Kuq i Kosovës',
        ]);
        Charity::create([
            'name' => 'Shoqata e të Verbërve të Kosovës',
        ]);
        Charity::create([
            'name' => 'YMCA Kosovo',
        ]);
        Charity::create([
            'name' => 'Save the Children Kosovo',
        ]);
        Charity::create([
            'name' => 'UNICEF Kosovo',
        ]);
        Charity::create([
            'name' => 'Fondacioni për të Drejtat e Kafshëve',
        ]);
        Charity::create([
            'name' => 'Qendra për Promovimin e Drejtave të Grave',
        ]);
        Charity::create([
            'name' => 'HANDIKOS',
        ]);
    }
}
