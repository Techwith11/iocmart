<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    public function up(): void
    {
        Schema::create('orders', static function (Blueprint $table) {
            $table->bigIncrements('id');
			$table->integer('user_id')->unsigned();
			$table->integer('post_id')->unsigned();
			$table->integer('quantity')->unsigned();
			$table->integer('delivered')->unsigned()->default(0);
            $table->timestamps();
        });
    }

    public function down(): Void
    {
        Schema::dropIfExists('orders');
    }
}
