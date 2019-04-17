using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TUserController : ControllerBase
    {
        private DataContext _context;

        public TUserController(DataContext context)
        {
            this._context = context;
        }

        [HttpGet("users")]
        public IEnumerable<User> GetUsers() 
        {
            var users = this._context.Users;
            return  users;
        }

        [HttpGet("users/{id}")]
        public async Task<User> GetUser(int id) 
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
            return user;
        }
    }
}