// ...existing code...
var man = [
  {
    id: 1,
    name: "The Cosmo (Đen) Quần short kaki",
    code: "TC1025011BA",
    price: "250.000",
    oldPrice: "320.000",
    image: "https://n7media.coolmate.me/image/April2023/quan-short-nam-den-1651_289.jpg"
  },
  {
    id: 2,
    name: "Quần baggy đen sang trọng QQ",
    code: "TC1025011BA",
    price: "398.000",
    oldPrice: "460.000",
    image: "https://localhouze.com/wp-content/uploads/2022/11/Quan-Baggy-Jean-Nam-Ong-Rong-Den-4.jpg"
  },
  {
    id: 3,
    name: "The Cosmo (Đen) Quần short kaki",
    code: "TC1025011BA",
    price: "300.000",
    oldPrice: "380.000",
    image: "https://pos.nvncdn.com/492284-9176/ps/20231223_5oBqQnUsLX.jpeg?v=1703304886"
  },
  {
    id: 4,
    name: "The Cosmo (Đen) Quần short kaki",
    code: "TC1025011BA",
    price: "300.000",
    oldPrice: "390.000",
    image: "https://pos.nvncdn.com/494dd6-88815/ps/20230925_iXwdghEPjy.jpeg?v=1695629714"
  }
];

var women = [
  {
    id: 1,
    name: "Váy Fashion",
    code: "TC1025011BA",
    price: "250.000",
    oldPrice: "320.000",
    image: "https://cdn.hstatic.net/products/200000182297/12_c33b8da57f574d70bd5615b89ef6010a_master.jpg"
  },
  {
    id: 2,
    name: "Áo thun phối váy ngắn",
    code: "TC1025011BA",
    price: "398.000",
    oldPrice: "480.000",
    image: "https://file.hstatic.net/1000284478/file/phoi-do-voi-chan-vay-xep-ly-ngan-10_2bb9d6f91317496e8c4faac6e5d8feb6.jpg"
  },
  {
    id: 3,
    name: "Áo khoác",
    code: "TC1025011BA",
    price: "300.000",
    oldPrice: "370.000",
    image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/119/564/products/ao-khoac-nu-han-quoc-4159.jpg?v=1708316429203"
  },
  {
    id: 4,
    name: "Áo thun",
    code: "TC1025011BA",
    price: "300.000",
    oldPrice: "360.000",
    image: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465755/item/vngoods_10_465755_3x4.jpg"
  }
];

function cardTemplate(item) {
  return `
    <div class="card">
      <img src="${item.image}" alt="${item.name}" style="height:260px;">
      <div class="card-body">
        <div class="name-code">
          <h5 class="product-name">${item.name}</h5>
          <p class="product-code">${item.code}</p>
        </div>
        <div class="prices">
          <span class="price-now">${item.price} VNĐ</span>
          <span class="price-old">${item.oldPrice} VNĐ</span>
        </div>
        <button class="buy-btn">Đặt mua</button>
      </div>
    </div>
  `;
}

function cardTemplateWomen(item) {
  return `
    <div class="card">
      <img src="${item.image}" alt="${item.name}" style="height:260px;">
      <div class="card-body">
        <div class="name-code">
          <h5 class="product-name">${item.name}</h5>
          <p class="product-code">${item.code}</p>
        </div>
        <div class="prices">
          <span class="price-now">${item.price} VNĐ</span>
          <span class="price-old">${item.oldPrice} VNĐ</span>
        </div>
        <button class="buy-btn">Đặt mua</button>
      </div>
    </div>
  `;
}

function cardTemplateMen(item) {
  return `
    <div class="card">
      <img src="${item.image}" alt="${item.name}" style="height:260px;">
      <div class="card-body">
        <div class="name-code">
          <h5 class="product-name">${item.name}</h5>
        </div>
        <div class="prices">
          <span class="price-now">${item.price} VNĐ</span>
        </div>
        <button class="buy-btn buy-btn-men">Đặt mua</button>
      </div>
    </div>
  `;
}

function renderSection(list, elementId, templateFn) {
  var root = document.getElementById(elementId);
  if (!root) return;
  root.innerHTML = list.map(templateFn).join("");
}

function listProducts() {
  renderSection(women, "women", cardTemplateWomen);
  renderSection(man, "men", cardTemplateMen);
}

document.addEventListener("DOMContentLoaded", function () {
  listProducts();

  var searchBtn = document.getElementById("searchBtn");
  var searchInput = document.getElementById("searchInput");

  searchBtn.addEventListener("click", function () {
    var keyword = searchInput.value.trim().toLowerCase();

    var womenFiltered = women.filter(function (item) {
      return item.name.toLowerCase().includes(keyword) || item.code.toLowerCase().includes(keyword);
    });

    var menFiltered = man.filter(function (item) {
      return item.name.toLowerCase().includes(keyword) || item.code.toLowerCase().includes(keyword);
    });

    renderSection(womenFiltered, "women", cardTemplateWomen);
    renderSection(menFiltered, "men", cardTemplateMen);
  });
});
