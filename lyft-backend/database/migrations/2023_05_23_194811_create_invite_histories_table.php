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
            $table->string('code');
            $table->string('user_id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('invite_histories');
    }
}
