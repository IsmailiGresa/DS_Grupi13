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
            $table->string('date');
            $table->string('code');
            $table->integer('applications');
            $table->integer('activations');
            $table->decimal('earnings', 8, 2);
            $table->unsignedBigInteger('user_id'); // Foreign key column
            $table->timestamps();

            // Define foreign key constraint
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    public function down()
    {
        Schema::dropIfExists('invite_histories');
    }
}
