<?php

namespace App\Http\Controllers;

use App\Models\Dataset;
use Illuminate\Http\Request;

class DatasetController extends Controller
{
    public function index()
    {
        return Dataset::latest()->get();
    }

    public function store(Request $request)
    {
        return Dataset::create($request->all());
    }


    public function show(Dataset $dataset)
    {
        return $dataset;
    }

    public function update(Request $request, Dataset $dataset)
    {
        $dataset->update($request->all());

        return [
            "message" => "successfully"
        ];
    }

    public function destroy(Dataset $dataset)
    {
        $dataset->delete();

        return [
            "message" => "successfully"
        ];
    }
}
