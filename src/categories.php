<?php require_once 'init.php';

if ($_GET['action'] == 'add') {
  $data = json_decode(file_get_contents('php://input'), true);


  $query = $pdo->prepare("INSERT INTO categories (title) VALUES (:title)");

  $query->execute($data);

  echo json_encode($data);


}

if ($_GET['action'] == 'edit') {
  $data = json_decode(file_get_contents('php://input'), true);


  $query = $pdo->prepare("REPLACE INTO categories (id,title) VALUES (:id,:title)");

  $query->execute($data);

  echo json_encode($data);


}


if ($_GET['action'] == 'getall') {
  $query = $pdo->prepare("SELECT * FROM categories");
  $query->execute();
  $products = $query->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($products);
}

if ($_GET['action'] == 'getone') {
  $data = json_decode(file_get_contents('php://input'), true);
  $query = $pdo->prepare("SELECT * FROM categories WHERE id=:id");
  $query->execute($data);
  $product = $query->fetch(PDO::FETCH_ASSOC);

  echo json_encode($product);
}


if ($_GET['action'] == 'delete') {
  $data = json_decode(file_get_contents('php://input'), true);

  $result = $pdo->prepare("DELETE FROM categories WHERE id=:id");
  $test = $result->execute($data);

  echo json_decode($test);
}