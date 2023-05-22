<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRenamedPurchasesTable extends Migration
{
    public function up()
    {
        Schema::create('purchases', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('gift_card_history_id');
            $table->text('purchase_details');
            $table->timestamps();

            $table->foreign('gift_card_history_id')->references('id')->on('gift_card_history');
        });
    }

    public function down()
    {
        Schema::dropIfExists('purchases');
    }
}
