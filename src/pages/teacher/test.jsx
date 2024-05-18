import { useState } from 'react'
import axios from 'axios' // 引入 Axios 套件
import { useDropzone } from 'react-dropzone' // 引入 react-dropzone 套件

function UploadVideoForm() {
  const [progress, setProgress] = useState(0) // 追蹤上傳進度的狀態
  const [video, setVideo] = useState(null) // 存放選擇的影片的狀態

  // 使用 react-dropzone 套件來處理拖放上傳
  const onDrop = (acceptedFiles) => {
    const selectedVideo = acceptedFiles[0]
    setVideo(selectedVideo) // 將選擇的影片存放到狀態中
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  // 處理表單提交
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!video) {
      alert('請選擇要上傳的影片')
      return
    }

    const formData = new FormData() // 創建 FormData 物件
    formData.append('video', video) // 將選擇的影片添加到 FormData 中

    try {
      const response = await axios.post('/api/upload-video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // 設置標頭，表明傳送的是 FormData
        },
        onUploadProgress: (progressEvent) => {
          const progressPercent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          ) // 計算上傳進度的百分比
          setProgress(progressPercent) // 更新進度狀態
        },
      })
      console.log('影片上傳成功', response.data)
    } catch (error) {
      console.error('影片上傳失敗', error)
    }
  }

  return (
    <div>
      <h2>上傳影片</h2>
      <form onSubmit={handleSubmit}>
        {/* 使用 react-dropzone 提供的元素標籤 */}
        <div {...getRootProps()} style={dropzoneStyle}>
          <input {...getInputProps()} />
          <p>拖放影片到這裡，或點擊選擇影片</p>
        </div>
        {/* 顯示已選擇的影片和上傳進度 */}
        {video && (
          <div>
            <p>已選擇影片：{video.name}</p>
            <progress value={progress} max={100} style={{ width: '200px' }} />
            <button type="submit">上傳影片</button>
          </div>
        )}
      </form>
    </div>
  )
}

// 定義 dropzone 的樣式
const dropzoneStyle = {
  border: '2px dashed #ccc',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
}

export default UploadVideoForm
