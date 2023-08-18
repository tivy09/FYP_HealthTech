<?php

namespace App\Models;

use \DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientsReport extends Model
{
    use HasFactory;
    use SoftDeletes;

    public $table = 'patients_report';

    public const STATUS_SELECT = [
        '0' => 'Inactive',
        '1' => 'Active',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'id',
        'remark',
        'status',
        'doctor_id',
        'patient_id',
        'appointment_id',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function doctors()
    {
        return $this->belongsTo(Doctor::class, 'doctor_id');
    }

    public function patients()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
