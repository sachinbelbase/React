import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, PostFrom } from '../components'
import { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"

function EditPost() {
     const [post, setPosts] = useState(null)
     const { slug } = useParams()
     const navigate = useNavigate()

     useEffect(() => {
          if (slug) {
               appwriteService.getPosts(slug)
                    .then((post => {
                         if (post) {
                              setPosts(post)
                         }
                    }))
          }
          else {
               navigate("/")
          }
     }, [slug, navigate])
     return post ? <div className='py-8'>
          <Container>
               <PostFrom post={post} />
          </Container>
     </div> : null
}

export default EditPost