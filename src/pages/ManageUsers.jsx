import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2, ArrowLeft, Plus, X } from "lucide-react";
import "../styles/manageusers.css";

export default function ManageUsers() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    {
      id: 1,
      nama: "Super Admin",
      ttl: "2001-05-15",
      gender: "Laki-laki",
      alamat: "Semarang",
      nohp: "081234567890",
      username: "superadmin",
      password: "super123",
      status: "aktif",
      role: "superadmin",
      roleId: 1,
    },
    {
      id: 2,
      nama: "Admin",
      ttl: "2002-08-20",
      gender: "Perempuan",
      alamat: "Jakarta",
      nohp: "082233445566",
      username: "admin",
      password: "admin123",
      status: "aktif",
      role: "admin",
      roleId: 2,
    },
  ]);

  const [form, setForm] = useState({
    nama: "",
    ttl: "",
    gender: "Laki-laki",
    alamat: "",
    nohp: "",
    username: "",
    password: "",
    status: "aktif",
    role: "admin",
  });

  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const resetForm = () => {
    setForm({
      nama: "",
      ttl: "",
      gender: "Laki-laki",
      alamat: "",
      nohp: "",
      username: "",
      password: "",
      status: "aktif",
      role: "admin",
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openAddModal = () => {
    setEditId(null);
    resetForm();
    setShowModal(true);
  };

  const openEditModal = (user) => {
    setEditId(user.id);
    setForm({
      nama: user.nama,
      ttl: user.ttl,
      gender: user.gender,
      alamat: user.alamat,
      nohp: user.nohp,
      username: user.username,
      password: user.password,
      status: user.status,
      role: user.role,
    });
    setShowModal(true);
  };

  const saveUser = () => {
    if (!form.nama || !form.username || !form.password || !form.role) {
      alert("Nama, Username, Password, dan Role wajib diisi!");
      return;
    }

    if (editId) {
      const updatedUsers = users.map((u) =>
        u.id === editId
          ? {
              ...u,
              ...form,
              roleId: form.role === "superadmin" ? 1 : 2,
            }
          : u
      );

      setUsers(updatedUsers);
      alert("User berhasil diupdate!");
    } else {
      const newUser = {
        id: users.length + 1,
        ...form,
        roleId: form.role === "superadmin" ? 1 : 2,
      };

      setUsers([...users, newUser]);
      alert("User berhasil ditambahkan!");
    }

    setShowModal(false);
    setEditId(null);
    resetForm();
  };

  const deleteUser = (id) => {
    const confirmDelete = confirm("Yakin ingin menghapus user ini?");
    if (!confirmDelete) return;

    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="manage-users-container">
      {/* HEADER */}
      <div className="page-header">
        <h1>Kelola User</h1>
      </div>

      {/* TOOLBAR */}
      <div className="user-toolbar">
        <button className="btn-back" onClick={() => navigate("/dashboard")}>
          <ArrowLeft size={18} />
          Kembali
        </button>

        <div className="toolbar-right">
          <div className="user-count">
            Total User: <b>{users.length}</b>
          </div>

          <button className="btn-add" onClick={openAddModal}>
            <Plus size={18} />
            Tambah User
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="user-table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>TTL</th>
              <th>Gender</th>
              <th>Alamat</th>
              <th>No HP</th>
              <th>Username</th>
              <th>Password</th>
              <th>Status</th>
              <th>Role</th>
              <th>Role ID</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.nama}</td>
                <td>{u.ttl}</td>
                <td>{u.gender}</td>
                <td>{u.alamat}</td>
                <td>{u.nohp}</td>
                <td>{u.username}</td>
                <td>{"••••••••"}</td>
                <td>{u.status}</td>
                <td>{u.role}</td>
                <td>{u.roleId}</td>

                <td>
                  <div className="action-buttons">
                    <button
                      className="btn-action edit"
                      onClick={() => openEditModal(u)}
                      title="Edit"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      className="btn-action delete"
                      onClick={() => deleteUser(u.id)}
                      title="Hapus"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h2>{editId ? "Edit User" : "Tambah User"}</h2>

              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* FORM GRID RAPI */}
            <div className="modal-form">
              <div className="form-row">
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama"
                  value={form.nama}
                  onChange={handleChange}
                />

                <input
                  type="date"
                  name="ttl"
                  value={form.ttl}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                >
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>

                <input
                  type="text"
                  name="nohp"
                  placeholder="No HP"
                  value={form.nohp}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row-full">
                <input
                  type="text"
                  name="alamat"
                  placeholder="Alamat"
                  value={form.alamat}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row-full">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={form.username}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row-full">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option value="aktif">Aktif</option>
                  <option value="nonaktif">Nonaktif</option>
                </select>

                <select name="role" value={form.role} onChange={handleChange}>
                  <option value="admin">Admin</option>
                  <option value="superadmin">Super Admin</option>
                </select>
              </div>
            </div>

            <div className="modal-actions">
              <button
                className="btn-cancel"
                onClick={() => setShowModal(false)}
              >
                Batal
              </button>
              <button className="btn-save" onClick={saveUser}>
                {editId ? "Update" : "Simpan"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
