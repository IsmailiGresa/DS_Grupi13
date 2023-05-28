<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pricing_buckets', function (Blueprint $table) {
            $table->id();
            $table->string('min_distance');
            $table->string('max_distance');
            $table->string('amount_l1');
            $table->string('amount_l2');
            $table->string('amount_l3');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pricing_buckets');
    }
};
