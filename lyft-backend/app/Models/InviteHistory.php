<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InviteHistory extends Model
{
    public function up()
    {
        Schema::create('invite_histories', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->date('date');
            $table->integer('applications');
            $table->integer('activations');
            $table->integer('earnings');
            $table->timestamps();
        });
    }
}
