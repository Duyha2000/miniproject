import { Pagination } from "@mui/material";
import PropTypes from "prop-types";

export default function ListStudent({
  handleSearch,
  sortStudent,
  listStudent,
  onClick,
  showInfo,
  deleteStudent,
  editStudent,
  totalPage,
  handleChangePage,
  pageActive,
}) {
  return (
    <>
      {" "}
      <div>
        {" "}
        <div className="list">
          <button className="list_btn--themmoi" onClick={onClick}>
            Thêm mới sinh viên
          </button>
          <form onSubmit={handleSearch}>
            <input
              className="list_input--themmoi"
              type="text"
              placeholder="Nhập tên sinh viên"
            />
            <button type="submit" className="list_btn--timkiem">
              Tìm kiếm
            </button>
          </form>
          <button onClick={() => sortStudent()} className="list_btn--sapxep">
            Sắp xếp
          </button>
        </div>
        <h2>Danh Sách Sinh Viên</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            borderSpacing: "0",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <tr>
            <th>#</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Hành động</th>
          </tr>
          {listStudent.map((student, index) => (
            <tr key={student.studentId}>
              <td>{index + 1}</td>
              <td>{student.studentId}</td>
              <td>{student.studentName}</td>
              <td>{student.studentAge}</td>
              <td>{student.studentGender}</td>
              <td>
                <button
                  className="list_table--btn--xem"
                  onClick={() => showInfo(student)}
                >
                  Xem
                </button>
                <button
                  className="list_table--btn--sua"
                  onClick={() => editStudent(student)}
                >
                  Sửa
                </button>
                <button
                  className="list_table--btn--xoa"
                  onClick={() => deleteStudent(student)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </table>
        <Pagination
          count={totalPage} // tổng số trang
          size="large"
          page={pageActive ?? 1} // trang hiện tại
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => handleChangePage(e, value)}
        />
      </div>
    </>
  );
}

ListStudent.propTypes = {
  listStudent: PropTypes.array,
  onClick: PropTypes.func,
  showInfo: PropTypes.func,
  deleteStudent: PropTypes.func,
  editStudent: PropTypes.func,
  handleSearch: PropTypes.func,
  sortStudent: PropTypes.func,
  totalPage: PropTypes.number,
  handleChangePage: PropTypes.func,
  pageActive: PropTypes.number,
};
