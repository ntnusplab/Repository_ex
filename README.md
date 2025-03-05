# Repository Class 使用說明

這是一個使用 Sequelize ORM 的通用資料庫操作類別，提供基本的 CRUD 功能。

## 📝 目錄

  - [create - 新增資料](#create-新增資料)
  - [getAll - 取得所有資料](#getall-取得所有資料)
  - [getKeyEqual - 查詢指定條件](#getkeyequal-查詢指定條件)
  - [getKeyEqualLast5Min - 查詢最近5分鐘資料](#getkeyequallast5min-查詢最近5分鐘資料)
  - [getKeyBetween - 查詢區間資料](#getkeybetween-查詢區間資料)
  - [updateKeyEqual - 更新資料](#updatekeyequal-更新資料)
  - [deleteKeyEqual - 刪除資料](#deletekeyequal-刪除資料)

---

## create-新增資料

- **功能：** 新增一筆資料到資料庫。
- **語法：** `create(data)`
- **參數：**
  - `data`：要新增的資料物件。
- **格式：** _物件名稱_.create({需存入的json資料});
- **範例：**

```javascript
repository.create({ name: "John", age: 30 });
// repository 需改成自己物件名稱
```
---

## getAll-取得所有資料

- **功能：** 取得資料表中所有資料。
- **語法：** `getAll()`
- **格式：** _物件名稱_.getAll();
- **範例：**

```javascript
repository.getAll();
// repository 需改成自己物件名稱
```

---

## getKeyEqual-查詢指定條件

- **功能：** 查詢指定欄位等於某個值的資料。
- **語法：** `getKeyEqual(key, value)`
- **格式：** _物件名稱_.getKeyEqual(欄位名稱, 查詢值);
- **參數：**
  - `key`：欄位名稱。
  - `value`：查詢的值。
- **範例：**

```javascript
repository.getKeyEqual("status", "active");
// repository 需改成自己物件名稱
```

---

## getKeyEqualLast5Min-查詢最近5分鐘資料

- **功能：** 查詢最近 5 分鐘內更新的資料。
- **語法：** `getKeyEqualLast5Min(key, value)`
- **格式：** _物件名稱_.getKeyEqualLast5Min(欄位名稱, 查詢值);
- **範例：**

```javascript
repository.getKeyEqualLast5Min("status", "active");
// repository 需改成自己物件名稱
```

---

## getKeyBetween-查詢區間資料

- **功能：** 查詢某欄位的值介於特定範圍的資料。
- **語法：** `getKeyBetween(key, start, end)`
- **格式：** _物件名稱_.getKeyBetween(欄位名稱, 起始值, 結束值);
- **範例：**

```javascript
repository.getKeyBetween("age", 20, 30);
// repository 需改成自己物件名稱
```

---

## updateKeyEqual-更新資料

- **功能：** 更新符合條件的資料。
- **語法：** `updateKeyEqual(key, value, element, num)`
- **格式：** _物件名稱_.updateKeyEqual(欄位名稱, 條件值, 更新欄位, 更新值);
- **範例：**

```javascript
repository.updateKeyEqual("name", "John", "age", 35);
// repository 需改成自己物件名稱
```

---

## deleteKeyEqual-刪除資料

- **功能：** 刪除符合條件的資料。
- **語法：** `deleteKeyEqual(key, value)`
- **格式：** _物件名稱_.deleteKeyEqual(欄位名稱, 刪除條件值);
- **範例：**

```javascript
repository.deleteKeyEqual("status", "inactive");
// repository 需改成自己物件名稱
```

---

**⚠️ 注意：** 請確保使用正確的模型結構和欄位名稱，以避免資料錯誤或遺失。

