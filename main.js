// Câu 1: Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 5 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
const products = [
  new Product(1, "iPhone 15", 25000000, 10, "Electronics", true),
  new Product(2, "Samsung Galaxy S24", 22000000, 5, "Electronics", true),
  new Product(3, "Áo thun nam", 150000, 0, "Clothing", false),
  new Product(4, "Quần jean nữ", 350000, 8, "Clothing", true),
  new Product(5, "Tai nghe Bluetooth", 500000, 15, "Accessories", true),
  new Product(6, "Balo laptop", 450000, 3, "Accessories", true),
];

// Câu 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
function getNameAndPrice(products) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    result.push({
      name: products[i].name,
      price: products[i].price,
    });
  }
  console.log("=== Câu 3: Mảng name và price ===");
  console.log(result);
  return result;
}

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
function getInStockProducts(products) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].quantity > 0) {
      result.push(products[i]);
    }
  }
  console.log("\n=== Câu 4: Sản phẩm còn hàng ===");
  console.log(result);
  return result;
}

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30 hay không
function hasExpensiveProduct(products) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > 30) {
      console.log("\n=== Câu 5: Có sản phẩm giá > 30? ===");
      console.log(true);
      return true;
    }
  }
  console.log("\n=== Câu 5: Có sản phẩm giá > 30? ===");
  console.log(false);
  return false;
}

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
function allAccessoriesAvailable(products) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Accessories" && !products[i].isAvailable) {
      console.log("\n=== Câu 6: Tất cả Accessories có bán? ===");
      console.log(false);
      return false;
    }
  }
  console.log("\n=== Câu 6: Tất cả Accessories có bán? ===");
  console.log(true);
  return true;
}

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price × quantity
function getTotalInventoryValue(products) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].quantity;
  }
  console.log("\n=== Câu 7: Tổng giá trị kho ===");
  console.log(total);
  return total;
}

// Câu 8: Dùng for...of Duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
function printProductInfo(products) {
  console.log("\n=== Câu 8: Thông tin sản phẩm ===");
  for (const product of products) {
    const status = product.isAvailable ? "Còn hàng" : "Hết hàng";
    console.log(`${product.name} - ${product.category} - ${status}`);
  }
}

// Câu 9: dùng for...in để In ra tên thuộc tính và In ra giá trị tương ứng
function printProductProperties(product) {
  console.log("\n=== Câu 9: Thuộc tính sản phẩm ===");
  console.log("Tên thuộc tính:");
  for (const key in product) {
    console.log(key);
  }

  console.log("\nGiá trị tương ứng:");
  for (const key in product) {
    console.log(product[key]);
  }
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
function getAvailableProductNames(products) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].isAvailable && products[i].quantity > 0) {
      result.push(products[i].name);
    }
  }
  console.log("\n=== Câu 10: Sản phẩm đang bán và còn hàng ===");
  console.log(result);
  return result;
}

// Gọi các hàm để test
getNameAndPrice(products);
getInStockProducts(products);
hasExpensiveProduct(products);
allAccessoriesAvailable(products);
getTotalInventoryValue(products);
printProductInfo(products);
printProductProperties(products[0]);
getAvailableProductNames(products);
