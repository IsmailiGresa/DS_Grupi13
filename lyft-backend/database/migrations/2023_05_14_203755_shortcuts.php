<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('shortcuts', function (Blueprint $table) {
            $table->id();
            $table->string('home_location');
            $table->string('work_location');
            $table->timestamps();
        });
    }

    /**
         * Reverse the migrations.
         */
    public function down(): void
    {
        //
    }
};
