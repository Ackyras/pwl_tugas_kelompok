<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'attachment',
        'writer'
    ];

    public function writer()
    {
        return $this->belongsTo(User::class, 'writer');
    }

    public function statistics()
    {
        return $this->belongsToMany(User::class, 'article_users');
    }
}
