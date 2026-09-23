// Lấy danh sách người dùng từ API
function getUsers() {
    return new Promise((resolve, reject) => {
        fecth('https://6aa4cd721397053d42bb0ca9.mockapi.io/sports')
            .then(response => {
                if (!response.ok) {
                    reject('Lỗi khi lấy dữ liệu người dùng');
                } else {
                    return response.json();
                }
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject('Lỗi mạng: ' + error.message);
            });
    });
}

getUsers()
    .then(data => {
        console.log('Danh sách người dùng:',data);
        console.log('Tổng số người dùng:',data.length);
    })
    .catch(error => {
        console.error('Đã xảy ra lỗi:',error);
    });     


// Thêm môn thể thao mới vào danh sách
function addSport(newSport){
    return new Promise((resolve, reject) => {
        fetch('https://6aa4cd721397053d42bb0ca9.mockapi.io/sports',{
            method: 'POST',
            body: JSON.stringify(newSport),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Không thể thêm người dùng');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

const newSport = {
  name: "Đạp xe",
  category: "Cá nhân",
  equipment: ["Xe đạp", "Mũ bảo hiểm", "Găng tay"],
  description: "Hoạt động đạp xe giúp rèn luyện sức bền và thể lực."
};

addSport(newSport)
  .then(data => {
    console.log("Môn thể thao mới đã được thêm:", data);
  })
  .catch(error => {
    console.error("Đã xảy ra lỗi khi thêm môn thể thao:", error);
  });

// Xoá môn thể thao khỏi danh sách
function deleteSport(sportId) {
    return new Promise((resolve, reject) => {
        fetch(`https://6aa4cd721397053d42bb0ca9.mockapi.io/sports/${sportId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Không thể xoá môn thể thao');
                }
                resolve(`Môn thể thao với ID ${sportId} đã được xoá thành công.`);
            })
            .catch(error => {
                reject(error);
            });
    });
}

const sportIdToDelete = 1; 

deleteSport(sportIdToDelete)
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error("Đã xảy ra lỗi khi xoá môn thể thao:", error);
    });