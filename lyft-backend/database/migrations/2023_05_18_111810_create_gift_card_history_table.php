<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGiftCardHistoryTable extends Migration
{
    public function up()
    {
        Schema::create('gift_card_history', function (Blueprint $table) {
            $table->id();
            $table->timestamp('timestamp');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('gift_card_history');
    }
}
