<?php
// 獲取 POST 請求的 JSON 數據
$jsonData = file_get_contents('php://input');
$formData = json_decode($jsonData, true);

// 檢查驗證碼
if (!isValidCaptcha($formData['captcha'])) {
    http_response_code(400);
    echo json_encode(['error' => '驗證碼錯誤']);
    exit;
}

// 存取表單欄位值
$name = $formData['name'];
$phone = $formData['phone'];
$email = $formData['email'];
$message = $formData['message'];

// 在這裡可以進行其他驗證或處理

// 將數據儲存到數據庫
$conn = new mysqli('localhost', 'username', 'password', 'database');
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => '無法連接到數據庫']);
    exit;
}

$stmt = $conn->prepare('INSERT INTO contacts (name, phone, email, message) VALUES (?, ?, ?, ?)');
$stmt->bind_param('ssss', $name, $phone, $email, $message);
$result = $stmt->execute();

if ($result) {
    http_response_code(200);
    echo json_encode(['message' => '表單提交成功!']);
} else {
    http_response_code(500);
    echo json_encode(['error' => '儲存數據時發生錯誤']);
}

$stmt->close();
$conn->close();

// 驗證碼檢查函數
function isValidCaptcha($captcha) {
    // 在這裡實作驗證碼檢查邏輯
    // 例如比對用戶輸入的驗證碼與伺服器端生成的驗證碼
    return true; // 暫時直接返回 true
}