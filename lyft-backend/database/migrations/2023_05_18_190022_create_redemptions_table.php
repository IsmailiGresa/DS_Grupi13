<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRedemptionsTable extends Migration
{
    public function up()
    {
        Schema::create('redemptions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('gift_card_history_id');
            $table->text('redemption_details');
            $table->timestamps();

            $table->foreign('gift_card_history_id')->references('id')->on('gift_card_history');
        });
    }

    public function down()
    {
        Schema::dropIfExists('redemptions');
    }
}
