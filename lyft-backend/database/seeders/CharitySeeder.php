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
            'image_url' => '../public/icons/CSCkosovo.png'
        ]);
        Charity::create([
            'name' => 'Kryqi i Kuq i Kosovës',
            'image_url' => '../public/icons/kryqi.png',
        ]);
        Charity::create([
            'name' => 'Shoqata e të Verbërve të Kosovës',
            'image_url' => '../public/icons/blindfederate.png'
        ]);
        Charity::create([
            'name' => 'YMCA Kosovo',
            'image_url' => '../public/icons/ymca.jpg'

        ]);
        Charity::create([
            'name' => 'Save the Children Kosovo',
            'image_url' => '../public/icons/savethechildren.jpg'

        ]);
        Charity::create([
            'name' => 'UNICEF Kosovo',
            'image_url' => '../public/icons/unicef.png'

        ]);
        Charity::create([
            'name' => 'Fondacioni për të Drejtat e Kafshëve',
            'image_url' => '../public/icons/kafshet.jpg'
        ]);
        Charity::create([
            'name' => 'Qendra për Promovimin e Drejtave të Grave',
            'image_url' => '../public/icons/women.png'

        ]);
        Charity::create([
            'name' => 'HANDIKOS',
            'image_url' => '../public/icons/handikos.png'

        ]);
    }
}
