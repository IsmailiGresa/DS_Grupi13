<!DOCTYPE html>
<html>
<head>
    <title>Purchase Details</title>
</head>
<body>
<h1>Purchase Details</h1>
<form action="/your-form-action" method="POST">
    @csrf
    <p>Purchase ID: {{ $purchase->id }}</p>
    <p>Gift Card History ID: {{ $purchase->gift_card_history_id }}</p>
    <p>Purchase Details: {{ $purchase->purchase_details }}</p>
    <p>Created At: {{ $purchase->created_at }}</p>
    <p>Updated At: {{ $purchase->updated_at }}</p>
</form>
</body>
</html>
