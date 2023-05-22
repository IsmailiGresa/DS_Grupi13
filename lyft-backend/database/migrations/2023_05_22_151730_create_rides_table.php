<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rides', function (Blueprint $table) {
            $table->id();
            $table->float('ride_length_km')->default(0);
            $table->decimal('amount')->default(0);
            $table->string('pickup_location_latitude');
            $table->string('pickup_location_longitude');
            $table->string('drop_off_location_latitude');
            $table->string('drop_off_location_longitude');
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('driver_id')->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rides');
    }
};
