
<!DOCTYPE html>
<html>
<head>
    <title>Redemption Details</title>
</head>
<body>
<h1>Redemption Details</h1>
<form action="/your-form-action" method="POST">
    @csrf
    <p>Redemption ID: {{ $redemption->id }}</p>
    <p>Gift Card History ID: {{ $redemption->gift_card_history_id }}</p>
    <p>Redemption Details: {{ $redemption->redemption_details }}</p>
    <p>Created At: {{ $redemption->created_at }}</p>
    <p>Updated At: {{ $redemption->updated_at }}</p>
</form>
</body>
</html>
