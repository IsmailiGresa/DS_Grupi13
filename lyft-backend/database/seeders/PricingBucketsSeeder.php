<?php

namespace Database\Seeders;

use App\Models\PricingBuckets;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PricingBucketsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PricingBuckets::create([
            'min_distance' => 0,
            'max_distance' => 10,
            'amount_l1' => 20,
            'amount_l2' => 30,
            'amount_l3' => 40,
        ]);

        PricingBuckets::create([
            'min_distance' => 11,
            'max_distance' => 20,
            'amount_l1' => 30,
            'amount_l2' => 40,
            'amount_l3' => 50,
        ]);
        PricingBuckets::create([
            'min_distance' => 21,
            'max_distance' => 30,
            'amount_l1' => 40,
            'amount_l2' => 50,
            'amount_l3' => 60,
        ]);
        PricingBuckets::create([
            'min_distance' => 31,
            'max_distance' => 40,
            'amount_l1' => 50,
            'amount_l2' => 60,
            'amount_l3' => 70,
        ]);
        PricingBuckets::create([
            'min_distance' => 41,
            'max_distance' => 50,
            'amount_l1' => 80,
            'amount_l2' => 90,
            'amount_l3' => 100,
        ]);
        PricingBuckets::create([
            'min_distance' => 51,
            'max_distance' => 60,
            'amount_l1' => 90,
            'amount_l2' => 100,
            'amount_l3' => 110,
        ]);
        PricingBuckets::create([
            'min_distance' => 61,
            'max_distance' => 70,
            'amount_l1' => 100,
            'amount_l2' => 110,
            'amount_l3' => 120,
        ]);
        PricingBuckets::create([
            'min_distance' => 71,
            'max_distance' => 80,
            'amount_l1' => 110,
            'amount_l2' => 120,
            'amount_l3' => 130,
        ]);
        PricingBuckets::create([
            'min_distance' => 81,
            'max_distance' => 90,
            'amount_l1' => 120,
            'amount_l2' => 130,
            'amount_l3' => 140,
        ]);
        PricingBuckets::create([
            'min_distance' => 91,
            'max_distance' => 100,
            'amount_l1' => 130,
            'amount_l2' => 140,
            'amount_l3' => 150,
        ]);
    }
}
