<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInviteHistoriesTable extends Migration
{
    public function up()
    {
        Schema::create('invite_histories', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->string('code');
            $table->integer('applications');
            $table->integer('activations');
            $table->decimal('earnings', 8, 2);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('invite_histories');
    }
}
